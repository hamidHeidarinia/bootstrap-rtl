const notifier = require('node-notifier');

class Notifier {
    apply(compiler) {
        compiler.plugin('done' , this.notification)
    }


    notification(stats) {
        const time = ((stats.endTime - stats.startTime) / 1000).toFixed(2);
        notifier.notify({
            title : 'My Notification',
            message: `webpack processing successfully completed!\n${stats.compilation.errors.length} errors \n Run in : ${time}s `,
            icon: 'Terminal Icon', // Absolute Path to Triggering Icon
        });
    }
}

module.exports = Notifier;