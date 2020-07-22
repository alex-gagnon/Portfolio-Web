
// source: https://abstracta.us/blog/tools/ultimate-list-100-software-testing-quotes/

const data = [
    {quote: "The most exciting phrase to hear in science, the one that heralds discoveries, is not ‘Eureka!’ but ‘Now that’s funny…’", author: "Isaac Asimov" },
    {quote: "We only see what we know.", author: "Goethe"},
    {quote: "Testing is an infinite process of comparing the invisible to the ambiguous in order to avoid the unthinkable happening to the anonymous.", author: "James Bach" },
    {quote: "Testers don’t like to break things; they like to dispel the illusion that things work.", author: "Kaner, Bach, Pettichord"},
    {quote: "Pretty good testing is easy to do (that’s partly why some people like to say ‘testing is dead’– they think testing isn’t needed as a special focus because they note that anyone can find at least some bugs some of the time). Excellent testing is quite hard to do.", author: "James Bach"},
    {quote: "A pinch of probability is worth a pound of perhaps.", author: "James Thurber"},
    {quote: "Testing is not responsible for the bugs inserted into software any more than the sun is responsible for creating dust in the air.", author: "Dorothy Graham"},
    {quote: "To those who say that “if you need testing at the end, you’re doing it wrong”, would you prefer a Boeing, or are you going Air Icarus?", author: "Michael Bolton"},
    {quote: "The problem is not that testing is the bottleneck. The problem is that you don’t know what’s in the bottle. That’s a problem that testing addresses.", author: "Michael Bolton"},
    {quote: "As ironic as it seems, the challenge of a tester is to test as little as possible. Test less, but test smarter.", author: "Federico Toledo"},
    {quote: "I am pretty sure there is a difference between “this has not been proven” and “this is false.”", author: "Ron Jeffries"},
    {quote: "Testing is a skill. While this may come as a surprise to some people it is a simple fact.", author: "Fewster and Graham"},
    {quote: "You can be a great tester if you have programming skills. You can also be a great tester if you have no programming skills at all. And, you can be a lousy tester with or without programming skills. A great tester will learn what skills she needs to continue to be great, in her own style.", author: "Jerry Weinberg"},
    {quote: "No amount of testing can prove a software right, a single test can prove a software wrong.", author: "Amir Ghahrai"},
    {quote: "Discovering the unexpected is more important than confirming the known.", author: "George E. P. Box"},
]

data.map((obj, index) => obj.id = index)

const quotes = {
    quotes: data
}

module.exports = quotes;