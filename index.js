var rpc = require("./discord-rpc/src/index");

const client = new rpc.Client({ transport: 'ipc' })

// The name of the app in the status is depend on what you name your app is

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "some-details", // change this for example "Competition"
            state: "some-state", // change this for example "Playing Duo"
            assets: {
                large_image: "background",  // Go to your app in Discord Developer Portal -> Art Assets -> under Rich Presence Assets, click Add Image(s) -> upload an image and a name to "background" 
                large_text: "some-text", // change this for example "Dust2"
                small_image: "favicon", // Same steps as large_image but upload another image and change its name to favicon
                small_text: "some-text", // change this for example "NoobMaster51"
            },
            buttons: [{
                label: "Name of the button" , // change this for example "My Website"
                url: "link-url" // valid url only
            },
            {
                label: "Name of the button", // change this for example "My Discord Server"
                url: "link-url" // valid url only
            }],
            party: {
                id: "some-id",
                size: [2, 2]  // [how many members left, total member] just replace with the number you want
            },
            timestamps: {
                start: 1621573828, // use correct timestamps
                // end: '', // remove or comment this if you want the time shows as elapsed time, otherwise it will show as time left, use correct timestamps
            }
        }
    });
});

client.login({ clientId : "843343169269923860" }).catch(console.error); // Your ApplicationID 