import model from "./model.js";
export const createModule = (module) => {
    delete module.id
    return model.create(module);
}
export const findAllUsers = () => model.find();
export const findModulesById = (moduleId) => model.findById(moduleId);
export const updateModule = (moduleId, name) => model.updateOne({ _id: moduleId }, { $set: name });
export const deleteModule = (moduleId) => model.deleteOne({ _id: moduleId });