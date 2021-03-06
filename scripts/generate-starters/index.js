const fs = require('fs-extra');

const getStartersList = async (folder) => {
  return fs
    .readdirSync(`./scripts/generate-starters/${folder}`)
    .map((folderName) => folderName);
};

const generateStarters = async () => {
  console.log('Start Starters Generator');

  const startersList = await getStartersList('starters');
  startersList.map(async (folderName) => {
    //
    fs.ensureDirSync(`./starters/${folderName}`);
    fs.rmSync(`./starters/${folderName}`, { recursive: true });
    //
    fs.copySync(
      './scripts/generate-starters/base-starter',
      `./starters/${folderName}`
    );
    fs.copySync(
      `./scripts/generate-starters/starters/${folderName}`,
      `./starters/${folderName}`
    );
  });

  const examplesList = await getStartersList('examples');
  examplesList.map(async (folderName) => {
    //
    fs.ensureDirSync(`./examples/${folderName}`);
    fs.rmSync(`./examples/${folderName}`, { recursive: true });
    //
    fs.copySync(
      './scripts/generate-starters/base-starter',
      `./examples/${folderName}`
    );
    fs.copySync(
      `./scripts/generate-starters/examples/${folderName}`,
      `./examples/${folderName}`
    );
  });

  const testsList = await getStartersList('test-builds');
  testsList.map(async (folderName) => {
    //
    fs.ensureDirSync(`./test-builds/${folderName}`);
    fs.rmSync(`./test-builds/${folderName}`, { recursive: true });
    //
    fs.copySync(
      './scripts/generate-starters/base-starter',
      `./test-builds/${folderName}`
    );
    fs.copySync(
      `./scripts/generate-starters/test-builds/${folderName}`,
      `./test-builds/${folderName}`
    );
  });

  console.log('End Starters Generator');
};

generateStarters();
