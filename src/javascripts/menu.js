const openAboutWindow = require("about-window").default;
const appInfo = require("../../package.json")

var about = () => {
  openAboutWindow({
    product_name: appInfo.productName,
    icon_path: `${__dirname}/../../static/rd.png`,
    copyright: `Copyright (c) 2020 ${appInfo.author}`,
    package_json_dir: `${__dirname}/../../`,
    license: appInfo.license,
    win_options: {
      titleBarStyle: "hidden"
    }
  })
}

var template = [{
  label: "Application",
  submenu: [
    { label: `About ${appInfo.productName}`, click: about },
    { type: "separator" },
    { label: "Quit", accelerator: "CmdOrCtrl+Q", role: 'quit' }
  ]
},
];

module.exports = { template: template }
