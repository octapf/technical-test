# technical-test
Technical test - Teresa Morenés



# Ex 1:
-----
If you had to use the next node.js module and call methods a and then b sequencially, explain why it's not so straightforward and what are the different solutions if we are using node v.8+.
Which is the most elegant solution in your opinion.

module.exports = {
    a: (cb) => {
        setTimeout(()=>{
            return cb(null,1000)
        },1000)
    },

    b: (cb) => {
        setTimeout(()=>{
            return cb(null,500)
        },500)
    },
}

# Ex 2:
-----
Enum top 5 features a table web component should have


# Ex 3:
-----

- Create a rest api containing methods GET/POST/PUT/DELETE, using express, following standards, and with minimal code
Use the following dataset:

- Create a vue (v2) app with view to manage this rest

Given array Countries
