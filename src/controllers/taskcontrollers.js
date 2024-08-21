const app_constants = require("../constants/app.json")
const taskService = require("../services/taskservices")
const validationHelp = require("../helpers/validation")

exports.addTask = async (req, res) => {
    try {
         const required_fields = ['title']
         const validation = validationHelp.validation(
            required_fields,
            req.body
          );

          if (Object.keys(validation).length) {
            return res.json({
              success: 0,
              status_code: app_constants.BAD_REQUEST,
              message: validation,
              result: {},
            });
          }

          const addTask = await taskService.addTask(req.body)

          return res.json(addTask)

      } catch (error) {
        console.log(error);
        res.json({
          success: 0,
          status_code: app_constants.INTERNAL_SERVER_ERROR,
          message: error.message,
          result: {},
        });
      }
}

exports.getAllTask = async (req, res) => {
    try {
         const data = await taskService.getAllTask()

         return res.json(data)
      } catch (error) {
        console.log(error);
        res.json({
          success: 0,
          status_code: app_constants.INTERNAL_SERVER_ERROR,
          message: error.message,
          result: {},
        });
      }
}

exports.getOneTask = async (req, res) => {
    try {
        const required_fields = ['id']
         const validation = validationHelp.validation(required_fields, req.params)

         if (Object.keys(validation).length) {
            return res.json({
              success: 0,
              status_code: app_constants.BAD_REQUEST,
              message: validation,
              result: {},
            });
          }

          const data = await taskService.getOneTask(req.params)
      
          return res.json(data);
      } catch (error) {
        console.log(error);
        res.json({
          success: 0,
          status_code: app_constants.INTERNAL_SERVER_ERROR,
          message: error.message,
          result: {},
        });
      }
}

exports.updateTask = async (req, res) => {
    try {
        const required_fields = ['id']
        const validation = validationHelp.validation(required_fields, req.params)

        if (Object.keys(validation).length) {
           return res.json({
             success: 0,
             status_code: app_constants.BAD_REQUEST,
             message: validation,
             result: {},
           });
         }

         const data = await taskService.updateTask(req.params, req.body)
     
         return res.json(data);
      } catch (error) {
        console.log(error);
        res.json({
          success: 0,
          status_code: app_constants.INTERNAL_SERVER_ERROR,
          message: error.message,
          result: {},
        });
      }
}

exports.deleteTask = async (req, res) => {
    try {
        const required_fields = ['id']
        const validation = validationHelp.validation(required_fields, req.params)

        if (Object.keys(validation).length) {
           return res.json({
             success: 0,
             status_code: app_constants.BAD_REQUEST,
             message: validation,
             result: {},
           });
         }

         const result = await taskService.deleteTask(req.params)
         return res.json(result)
      } catch (error) {
        console.log(error);
        res.json({
          success: 0,
          status_code: app_constants.INTERNAL_SERVER_ERROR,
          message: error.message,
          result: {},
        });
      }
}