import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section
                title='Model S'
                description='Order Online for Touchless Delivery'
                image="model-s.jpg"
                leftButtonTxt='Custom Order'
                rightButtonTxt='Existing Inventory'
            />

            <Section
                title='Model Y'
                description='Order Online for Touchless Delivery'
                image="model-y.jpg"
                leftButtonTxt='Custom Order'
                rightButtonTxt='Existing Inventory'
            />

            <Section
                title='Model X'
                description='Order Online for Touchless Delivery'
                image="model-x.jpg"
                leftButtonTxt='Custom Order'
                rightButtonTxt='Existing Inventory'
            />

            <Section
                title='Model 3'
                description='Order Online for Touchless Delivery'
                image="model-3.jpg"
                leftButtonTxt='Custom Order'
                rightButtonTxt='Existing Inventory'
            />

            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back gurantee'
                image="solar-panel.jpg"
                leftButtonTxt='Order Now'
                rightButtonTxt='Learn more'
            />

            <Section
                title='Solar For New Roofs'
                description='Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                image="solar-roof.jpg"
                leftButtonTxt='Order Now'
                rightButtonTxt='Learn MORE'
            />

            <Section
                title='Accessories'
                description=''
                image="accessories.jpg"
                leftButtonTxt='Shop Now'
            />
        </Container>
    )
}

export default Home;

const Container = styled.div`
    height: 100vh;

`
