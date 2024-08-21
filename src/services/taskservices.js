const Task = require("../models/taskModel")
const app_constant = require("../constants/app.json")
require("dotenv").config()

exports.addTask = async (data) => {
      if (!data.status) {
        data.status = 'pending';
    }
    if (!data.description) {
        data.description = ''
    }

    const savedTask = await Task.create({
        title : data.title,
        description : data.description,
        status : data.status
    })

    if (savedTask) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "task added successfully",
            result: savedTask,
        }

    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!', result: {}
    }
}


exports.getAllTask = async () => {
    const data = await Task.find()

    if (data) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "task added successfully",
            result: data,
        }
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!', result: {}
    }
}

exports.getOneTask = async (data) => {
    const {id} = data
    const task_data = await Task.findOne({_id : id})
    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "task not exist",
            result: {},
        }
    }

    if (task_data) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "task data fetched",
            result: task_data,
        }
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!', result: {}
    }
}

exports.updateTask = async (data, changeData) => {
    const {id} = data
    let {title, description, status} = changeData
    const task_data = await Task.findOne({_id : id})
    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "task not exist",
            result: {},
        }
    }

    if (!title) {
        title = task_data.title
    }
    if (!description) {
        description = task_data.description
    }
    if (!status) {
        status = task_data.status
    }

    const result = await Task.updateOne( 
        {_id : id},
        {$set : {title : title, description : description, status : status}}
    )

    if (result) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "task update success",
            result: data,
        }
    }

    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!', result: {}
    }
}

exports.deleteTask = async (data) => {
    const {id} = data

    const task_data = await Task.findOne({_id : id})
    if (!task_data) {
        return {
            success: 0,
            status: app_constant.BAD_REQUEST,
            message: "task not exist",
            result: {},
        }
    }

    const result = await Task.findByIdAndDelete(id);

    if (result) {
        return {
            success: 1,
            status: app_constant.SUCCESS,
            message: "task delete success",
            result: data,
        }
    }
     
    return {
        success: 0,
        status: app_constant.INTERNAL_SERVER_ERROR,
        message: 'Internal server error!', result: {}
    }

}

