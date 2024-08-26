import RNFetchBlob from "rn-fetch-blob";
import { Platform, Alert } from "react-native";

const DownloadFile = async (fileName, base64) => {
  const getUniqueFilePath = async (dirToSave, fileName) => {
    let filePath = `${dirToSave}/${fileName}`;
    let fileExists = await RNFetchBlob.fs.exists(filePath);
    let counter = 1;

    while (fileExists) {
      const fileParts = fileName.split(".");
      const name = fileParts.slice(0, -1).join(".");
      const extension = fileParts.slice(-1)[0];
      filePath = `${dirToSave}/${name}(${counter}).${extension}`;
      fileExists = await RNFetchBlob.fs.exists(filePath);
      counter += 1;
    }

    return filePath;
  };

  const proceedDownload = async () => {
    const { dirs } = RNFetchBlob.fs;
    const dirToSave =
      Platform.OS === "ios" ? dirs.DocumentDir : dirs.DownloadDir;
    const filePath = await getUniqueFilePath(dirToSave, fileName);

    const configfb = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        mediaScannable: true,
        title: fileName,
        path: filePath,
      },
      path: filePath,
    };

    const configOptions = Platform.select({
      ios: configfb,
      android: configfb,
    });

    RNFetchBlob.fs
      .writeFile(filePath, base64, "base64")
      .then(() => {
        if (Platform.OS === "ios") {
          RNFetchBlob.ios.previewDocument(filePath);
        }
      })
      .catch((e) => {
        Alert.alert("Download Failed", "Error downloading file: " + e.message);
      });
  };

  await proceedDownload();
};

export default DownloadFile;
