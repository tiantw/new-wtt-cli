#!/usr/bin/env node

const program = require('commander'); // node.js命令行界面的完整解决方案
const pkg = require('./package');

program
    .version(pkg.version)
    .usage("hao <command>")
    .description(pkg.dependencies)

program
    .command('init')
    .alias('i')
    .description('请选择模版初始化工程')
    .action(function () {
        // require('figlet')('H A O', function (err, data) {})
        console.log('a')
    })

program
    .on('--help', function () {
        `在这里插入代码片`
        console.log('');
        console.log('Examples:');
        console.log('');
    });

program.parse(process.argv);