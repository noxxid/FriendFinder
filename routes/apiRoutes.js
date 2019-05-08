var friendData = require("../app/data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendData);
    });


    app.post("/api/friends", function (req, res) {
        // console.log("test");
        console.log(req.body);
        friendData.push(req.body);
        res.json(friendData);

        for (var i = 0; i < friendData.length; i++) {
            let friendarray = friendData[i].dropdown;
            friendarray[i] = friendarray.map(function (x) {
                return parseInt(x, 10);
            });
            console.log(friendarray[i]);

        };

    })

    // friendData.push(req.body);

    // console.log(friendData);
    // res.json(friendData);
};


