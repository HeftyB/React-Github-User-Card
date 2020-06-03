import React from 'react'
import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle,
  } from 'reactstrap';


export default function Cards(props) {

    let card = props.currentUsers.map( (item) => {
        return(
            <div key={item.id}>
                <Card>
                    <div className="cardImg">
                        <CardImg src={item.avatar_url} alt="GITHUB IMG" className="rounded-circle"/>
                        <CardText><a href={item.html_url}>GitHub URL</a></CardText>
                        <CardText>Total Followers: {item.followers}</CardText>
                        <CardText>Total Following: {item.following}</CardText>
                    </div>
                    <CardBody className="cardContents">
                    <CardTitle>{item.login}</CardTitle>
                    <CardText>Name: {item.name ? item.name : "User has not set a Name"}</CardText>
                    <CardText>Company: {item.company ? item.company : "User has not set a Company"}</CardText>
                    <CardText>Email: {item.email ? item.email : "User has not made email public"}</CardText>
                    <CardText>Hireable: {item.hireable ? "Yes" : "User has not set availability"}</CardText>
                    <CardText>Bio: {item.bio ? item.bio : "User has not set bio"}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    })

    return (
        <div>
            {card}
        </div>
    )
}

