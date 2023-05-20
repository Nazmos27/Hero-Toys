import React, { useState } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';
import ToyDetailCard from './ToyDetailCard';

const CategoriseToys = () => {
    const [marvelToys,setMarvelToys] = useState([])
    const [dcToys,setDcToys] = useState([])
    const [starWarsToys,setStarWarsToys] = useState([])

    const targetMarvel = (event) => {
        const query = event.target.innerText
        fetch(`http://localhost:5000/collection?category=marvel`)
        .then(res => res.json())
        .then(data => setMarvelToys(data))
    }

    const targetDC = () => {
        fetch(`http://localhost:5000/collection?category=dc`)
        .then(res => res.json())
        .then(data => setDcToys(data))
    }

    const targetStarWars = () => {
        fetch(`http://localhost:5000/collection?category=star_wars`)
        .then(res => res.json())
        .then(data => setStarWarsToys(data))
    }

    return (
        <div>
            <Tabs defaultFocus={true}>
                <TabList>
                    <Tab  onFocus={targetMarvel}  >Marvel Toys</Tab>
                    <Tab onFocus={targetDC}>DC Toys</Tab>
                    <Tab >Anime Figure</Tab>
                    <Tab onFocus={targetStarWars}>Star Wars</Tab>
                </TabList>

                <TabPanel>
                    {
                        marvelToys.map(item => <ToyDetailCard
                        key={item._id}
                        data={item}
                        ></ToyDetailCard>)
                    }
                </TabPanel>
                <TabPanel>
                    {
                        dcToys.map(item => <ToyDetailCard
                        key={item._id}
                        data={item}
                        ></ToyDetailCard>)
                    }
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
                <TabPanel>
                    {
                        starWarsToys.map(item => <ToyDetailCard
                        key={item._id}
                        data={item}
                        ></ToyDetailCard>)
                    }
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default CategoriseToys