import React from 'react'

let ID = 0;


function articles() {
    try {
        let title = articlesArray[ID].title 
    }
    catch (err){
        ID = 0;
        let title = articlesArray[ID].title
    }
    return (
        <div className = 'Article'>
            <h1>
                {articlesArray[ID].title}
            </h1>
            {paragraphReader(ID,0)}
            
        </div>
    );
}

let articlesArray = [
    {
        "ID": 0,
        "title": "Consensous vs Anti-Consensous Games",
        "url": "Consensous",
        "paragraphs": [
            "We love to delude ourselves into believing that we’re thinking, when we’re really just copying. Which is the way it should be, should a toddler reinvent language from first principles? Most problems are consensus problems. In a consensus problem you are right when most people agree with you. From an early age we learn: Do what most people do and you’ll be fine. Everything in school is like this, most jobs are like this, even walking is like this.",
            "The problem is that capitalism is a contrary problem. When Amazon was started as an online bookstore most people didn’t believe in it. How did Amazon succeed despite the pushback? No, Amazon succeeded because of the pushback. Amazon succeeded because no one else believed in the opportunity and became a competitor fast enough. In a contrary problem it’s not enough to be right, you’ve got to be right when most people disagree with you.",
            "To be good with contrary problems is to be right when everyone else is wrong. It’s not just dealing with what other people say. We all notice the ingenuine encouragement and the people who pretend to care. We love to think of ourselves as rational, but we are really social beings following the lead of others. We respond to the emotions others show, not just the logic of their arguments.",
            "So how can we get good at anti-consensus games?",
            "The most important thing is to find people who can be convinced. Your mom might support you, but that's because she's your mom. What you need are people who would disagree if what you’re saying doesn’t make sense. Yet are capable of being convinced by logic.",
            "Lastly, it's a matter of practice. If you are right when most people are wrong once, then you will trust your own judgement more in the future. It’s hard to do much of anything if you don’t have the balls to trust yourself. Autism, aspergers and narcissism are all considered disorders. Yet those things can surely give you an advantage here."
    
        ]
    },
    {
        "ID": 1,
        "title": "Vision vs Ideas",
        "url": "Vision",
        "paragraphs": [
            "We love to delude ourselves into believing that we’re thinking, when we’re really just copying. Which is the way it should be, should a toddler reinvent language from first principles? Most problems are consensus problems. In a consensus problem you are right when most people agree with you. From an early age we learn: Do what most people do and you’ll be fine. Everything in school is like this, most jobs are like this, even walking is like this.",
            "The problem is that capitalism is a contrary problem. When Amazon was started as an online bookstore most people didn’t believe in it. How did Amazon succeed despite the pushback? No, Amazon succeeded because of the pushback. Amazon succeeded because no one else believed in the opportunity and became a competitor fast enough. In a contrary problem it’s not enough to be right, you’ve got to be right when most people disagree with you.",
            "To be good with contrary problems is to be right when everyone else is wrong. It’s not just dealing with what other people say. We all notice the ingenuine encouragement and the people who pretend to care. We love to think of ourselves as rational, but we are really social beings following the lead of others. We respond to the emotions others show, not just the logic of their arguments.",
            "So how can we get good at anti-consensus games?",
            "The most important thing is to find people who can be convinced. Your mom might support you, but that's because she's your mom. What you need are people who would disagree if what you’re saying doesn’t make sense. Yet are capable of being convinced by logic.",
            "Lastly, it's a matter of practice. If you are right when most people are wrong once, then you will trust your own judgement more in the future. It’s hard to do much of anything if you don’t have the balls to trust yourself. Autism, aspergers and narcissism are all considered disorders. Yet those things can surely give you an advantage here."
    
        ]
    }
]

function paragraphReader(ID, paragraph) {
    try {
        
        return (
            <>
                <p>{articlesArray[ID].paragraphs[paragraph]}</p>
                {paragraphReader(ID, paragraph+1)}
            </>
        );
    }
    catch(err) {
        return (
            <>
                <p>{articlesArray[ID].paragraphs[paragraph]}</p>
            </>
        );
    }
}

function articleList(i) {
    try {
        return (
            <div className='articleList'>
               
                {articleList(i+1)}
            </div>
        );
    }
    catch(err) {
        return (
            <div className='articleList'>
                
            </div>
        );
    }
}

export default articles;