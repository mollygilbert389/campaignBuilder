import React, {Component} from 'react'
import "./style.css"


class CampaignCard extends Component {


render() {  

    const{campaign}=this.props
    
    return (
        <div className="campaignCardWhole">

            <div className="main">
                <div className="logoSpace">
                    {/* {campaign.campaignName} */}
                    Campaign Name: Mollywood
                </div>
                <div className="campaignTitle">
                    Title: {`Dynamically Created Title basde off random array`}
                </div>
                <div className="shortCampaignDescription">
                    Description: I'm going to lap some water out of my master's cup meow sit on human they not getting up ever so kitten is playing with dead mouse taco cat backwards spells taco cat get video posted to internet for chasing red dot.
                </div>
                <div className="dateCreated">
                    Date Created: UserName: {`added once login is added`}
                </div>
            </div>

{/* statc section this section can be added in now and will not change. I would also add this as a tab at the end*/}
            <div className="infoSection">Here are some key facts about this D&D Gameplay:</div>
            <div className="keyfacts">
                <div className="intro">
                    <div className="subTitle">Overview:</div>
                    <p>Eat from dog's food cats are a queer kind of folk so at four in the morning wake up owner meeeeeeooww scratch at legs and beg for food then cry and yowl until they wake up at two pm jump on window</p>
                </div>
                <div className="aboutCharacters">
                    <div className="subTitle">Whos is this adventure designed for?</div> 
                    <p>Throw down all the stuff in the kitchen run up and down stairs or push your water glass on the floor demand to have some of whatever the human is cooking, then sniff the offering and walk away scratch the furniture.</p>
                </div>
                <div className="adjustingAdventure"> 
                    <div className="subTitle">Need adjusting?</div>
                    <p>Sleep in the bathroom sink kitty loves pigs the fat cat sat on the mat bat away with paws. Sleep nap rub face on everything. Sleep nap where is my slave? I'm getting hungry for 𝕄𝔼𝕆𝕎 so run up and down stairs and lick face hiss at owner</p>
                </div>
                <div className="goodTipsTrade"> 
                    <div className="subTitle">Tips and DM Tricks</div>
                    <p>Sleep in the bathroom sink kitty loves pigs the fat cat sat on the mat bat away with paws. Sleep nap rub face on everything. Sleep nap where is my slave? I'm getting hungry for 𝕄𝔼𝕆𝕎 so run up and down stairs and lick face hiss at owner</p>
                </div>
                <div className="death"> 
                    <div className="subTitle">Handling Bad things that happen.</div> 
                    <p>Stare at ceiling ccccccccccccaaaaaaaaaaaaaaatttttttttttttttttssssssssssssssss my cat stared at me he was sipping his tea, too unwrap toilet paper cough hairball, eat toilet paper, meow in empty rooms sit in box.</p>
                </div>
            </div>

{/* this is the important part thtis will dynamically be created based off what the user has said*/}
            <div className="infoSection">Your Adventure:</div>
            <div className="aboutThisAdventure">
                <div className="background">
                    <div className="subTitle">A little background about this adventure:</div> 
                    <p>Run around the house at 4 in the morning rub my belly hiss but it's 3am, time to create some chaos human is behind a closed door, emergency! abandoned! meeooowwww!!! poop on grasses but cat not kitten around </p>
                </div>
                <div className="aboutQuest">
                    <div className="subTitle">A little background on how your characters are involved:</div> 
                    <p>Going to catch the red dot today going to catch the red dot today. Touch water with paw then recoil in horror i am the best claw drapes, yet run in circles, shake treat bag, and i am the best or grass smells good. </p>
                </div>
                <div className="hooks"> 
                    <div className="subTitle">Key information to keep in mind to keep your adventures busy</div> 
                    <p>I shredded your linens for you bathe private parts with tongue then lick owner's face carefully drink from water glass and then spill it everywhere and proceed to lick the puddle pretend not to be evil.</p>
                </div>
            </div>

{/* Acts will dynamically be created as well */}
            <div className="infoSection">Act 1</div>
            <div className="act1">
                <div>
                    <div className="">
                        <div className="subTitle">It Begins</div> 
                        <p>Making sure that fluff gets into the owner's eyes. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food stick butt in face kitty scratches couch bad kitty do not try to mix old food with new one to fool me!</p>
                    </div>
                    <div className="">
                        <p>Any key dialogue you want said: Hate dog fart in owners food jump off balcony, onto stranger's head love to play with owner's hair tie.</p>
                    </div>
                    <div className=""> 
                        <p>Inciting moment? Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat stinky cat have my breakfast spaghetti yarn but intently sniff hand, so chase imaginary bugs the dog smells bad for throwup on your pillow.</p>
                    </div>
                </div>

                <div className="partOneExplore">
                    <div className="placesTheyGoFirst">
                        <p>This is where your quest giver directs the group to go. Cats go for world domination love me! lick plastic bags purr like an angel fall asleep upside-down. Gate keepers of hell shred all toilet paper and spread around the house and poop on grasses.</p>
                        <div>
                            <div className="subSectionTitle">Place 1</div>
                            <p>Get my claw stuck in the dog's ear i see a bird i stare at it i meow at it i do a wiggle come here birdy and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for eat owner's food for mouse.</p>
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 2</div>
                            <p>Run in circles. Paw at your fat belly love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him {'(the yarn is from a $125 sweater)'} but terrorize the hundred-and-twenty-pound rottweiler and steal his bed,</p>
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 3</div>
                            <p>Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back sleep on my human's head or i is not fat, i is fluffy.</p> 
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 4</div>
                            <p>jellybean footies curly toes. Leave hair everywhere sleep all day whilst slave is at work, play all night whilst slave is sleeping, who's the baby, for jump on human and sleep on her all night long be long in the bed,</p>
                        </div>
                    </div>
                    <div className="conflicts">
                        <div className="subSectionTitle">Conflict Ahead</div>
                        <p>Any possible conflicts at this point? purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans, spread kitty litter all over house</p>
                    </div>
                    <div className="aboutMonsters"> 
                        <div className="subSectionTitle">Monster Info:</div>
                        <p>Imprtant information about your monsters: Purrrrrr meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Head nudges leave fur on owners clothes cry louder at reflection so annoy the old grumpy cat, </p>
                    </div>
                </div>
            </div>

            <div className="infoSection">Act 2</div>
            <div className="act1">
                <div>
                    <div className="">
                        <div className="subTitle">It Begins</div> 
                        <p>Making sure that fluff gets into the owner's eyes. Scratch at fleas, meow until belly rubs, hide behind curtain when vacuum cleaner is on scratch strangers and poo on owners food stick butt in face kitty scratches couch bad kitty do not try to mix old food with new one to fool me!</p>
                    </div>
                    <div className="">
                        <p>Any key dialogue you want said: Hate dog fart in owners food jump off balcony, onto stranger's head love to play with owner's hair tie.</p>
                    </div>
                    <div className=""> 
                        <p>Inciting moment? Have a lot of grump in yourself because you can't forget to be grumpy and not be like king grumpy cat stinky cat have my breakfast spaghetti yarn but intently sniff hand, so chase imaginary bugs the dog smells bad for throwup on your pillow.</p>
                    </div>
                </div>

                <div className="partOneExplore">
                    <div className="">
                        <p>This is where your quest giver directs the group to go. Cats go for world domination love me! lick plastic bags purr like an angel fall asleep upside-down. Gate keepers of hell shred all toilet paper and spread around the house and poop on grasses.</p>
                        <div>
                            <div className="subSectionTitle">Place 1</div>
                            <p>Get my claw stuck in the dog's ear i see a bird i stare at it i meow at it i do a wiggle come here birdy and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for eat owner's food for mouse.</p>
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 2</div>
                            <p>Run in circles. Paw at your fat belly love and coo around boyfriend who purrs and makes the perfect moonlight eyes so i can purr and swat the glittery gleaming yarn to him {'(the yarn is from a $125 sweater)'} but terrorize the hundred-and-twenty-pound rottweiler and steal his bed,</p>
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 3</div>
                            <p>Lick face hiss at owner, pee a lot, and meow repeatedly scratch at fence purrrrrr eat muffins and poutine until owner comes back sleep on my human's head or i is not fat, i is fluffy.</p> 
                        </div>
                        <div>
                            <div className="subSectionTitle">Place 4</div>
                            <p>jellybean footies curly toes. Leave hair everywhere sleep all day whilst slave is at work, play all night whilst slave is sleeping, who's the baby, for jump on human and sleep on her all night long be long in the bed,</p>
                        </div>
                    </div>
                    <div className="conflicts">
                        <div className="subSectionTitle">Conflict Ahead</div>
                        <p>Any possible conflicts at this point? purr in the morning and then give a bite to every human around for not waking up request food, purr loud scratch the walls, the floor, the windows, the humans, spread kitty litter all over house</p>
                    </div>
                    <div className="aboutMonsters"> 
                        <div className="subSectionTitle">Monster Info:</div>
                        <p>Imprtant information about your monsters: Purrrrrr meow go back to sleep owner brings food and water tries to pet on head, so scratch get sprayed by water because bad cat. Head nudges leave fur on owners clothes cry louder at reflection so annoy the old grumpy cat, </p>
                    </div>
                </div>
            </div>

{/* this will always be in your game so it could be acts -1 and the finale */}
            <div>
            <div className="infoSection">Finale</div>
            <div className="act1">
                <div>
                    <div className="subSectionTitle">Wrap It Up:</div>
                    <p>This is where your quest giver directs the group to go. Cats go for world domination love me! lick plastic bags purr like an angel fall asleep upside-down. Gate keepers of hell shred all toilet paper and spread around the house and poop on grasses.</p>
                </div>
                <div>
                <div className="subSectionTitle">Final Boss</div>
                    <p>Get my claw stuck in the dog's ear i see a bird i stare at it i meow at it i do a wiggle come here birdy and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for eat owner's food for mouse.</p>
                </div>
                <div className="subSectionTitle">Treasure</div>
                    <p>Get my claw stuck in the dog's ear i see a bird i stare at it i meow at it i do a wiggle come here birdy and poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls for eat owner's food for mouse.</p>
                </div>
                </div>
        </div>
    );
}
}

export default CampaignCard;