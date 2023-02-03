module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortunes: (req, res) => {
        console.log (req)
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", "A dubious friend may be an enemy in camouflage."];
      
        // choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortunes = fortunes[randomIndex];
      
        res.status(200).send(randomFortunes);
    },
    addCompliment: (req, res) => {
        console.log(req.body)
        const { compliment } = req.body;
        res.status(200).send(compliment)
     },
    getQuotes: (req, res) => {
        console.log(req)
        const quotes = [ "If you are afraid of loneliness, don't marry", "Don't get mad, get even.", "Some people are like Slinky's. Pretty much useless but make you smile when you push them down the stairs."];

        // choose random quote
        let randomIndex = Math.floor(Math.random() * randomQuotes.length);
        let randomQuotes = quote[randomIndex];

        res.status(200).send(randomQuotes);
    },
    addFortune: (req, res) => {
        console.log(req.body)
        const { fortune } = req.body;
        res.status(200).send(fortune)
    },

}
