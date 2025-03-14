import fs from "fs/promises"; // Use promises for cleaner code

async function deleteFolder(folderPath) {
  try {
    await fs.rm(folderPath, { recursive: true, force: true });
    console.log(`Folder ${folderPath} deleted successfully.`);
  } catch (err) {
    console.error(`Error deleting folder ${folderPath}:`, err);
  }
}

export default deleteFolder;
