const { BackupTask } = require("./BackupTask");
const { FullSyncTask } = require("./FullSyncTask");

const tasks = {
    FullSyncTask:FullSyncTask,
    BackupTask:BackupTask,
  };
module.exports = tasks;
