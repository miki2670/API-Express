const app = require("express")();
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send([
    {
      id: "1",
      type: "live",
      title: "People rule",
      label: "rules",
      url: "/live-event-1",
    },
    {
      id: "2",
      type: "photo",
      title: "man with a hat",
      label: "hat",
      url: "/photo-1",
    },
    {
      id: "3",
      type: "photo",
      title: "man with a car",
      label: "car",
      url: "/photo-2",
    },
    {
      id: "4",
      type: "live",
      title: "people watching tv",
      label: "televison",
      url: "/live-event-2",
    },
  ]);
});

app.get("/search/:title", (req, res) => {});

app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT}`));
