import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ToyDetailCard from './ToyDetailCard';

const CategoriseToys = () => {
    const [marvelToys, setMarvelToys] = useState([])
    const [dcToys, setDcToys] = useState([])
    const [starWarsToys, setStarWarsToys] = useState([])

    const targetMarvel = (event) => {
        // const query = event.target.innerText
        fetch(`https://assignment-11-serverside-eight.vercel.app/collection?category=marvel`)
            .then(res => res.json())
            .then(data => setMarvelToys(data))
    }

    const targetDC = () => {
        fetch(`https://assignment-11-serverside-eight.vercel.app/collection?category=dc`)
            .then(res => res.json())
            .then(data => setDcToys(data))
    }

    const targetStarWars = () => {
        fetch(`https://assignment-11-serverside-eight.vercel.app/collection?category=star_wars`)
            .then(res => res.json())
            .then(data => setStarWarsToys(data))
    }

    return (
        <div>
            <Tabs defaultFocus={true}>
                <TabList>
                    <Tab onFocus={targetMarvel}  >Marvel Toys</Tab>
                    <Tab onFocus={targetDC}>DC Toys</Tab>
                    <Tab onFocus={targetStarWars}>Star Wars</Tab>
                </TabList>

                <TabPanel>
                    <div className='md:grid md:grid-cols-2 md:gap-4 gap-4 md:px-36 md:my-10'>
                        {
                            marvelToys.map(item => <ToyDetailCard
                                key={item._id}
                                data={item}
                            ></ToyDetailCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid grid-cols-2 md:gap-4 md:px-36 md:my-10'>
                        {
                            dcToys.map(item => <ToyDetailCard
                                key={item._id}
                                data={item}
                            ></ToyDetailCard>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='md:grid grid-cols-2 md:gap-4 md:px-36 md:my-10'>
                        {
                            starWarsToys.map(item => <ToyDetailCard
                                key={item._id}
                                data={item}
                            ></ToyDetailCard>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default CategoriseToys