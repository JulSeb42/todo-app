// Packages
import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"
import * as Font from "../styles/Font"
import Icon from "../ui/Icon"
// import SelectStatus from "./SelectStatus"
import TitleFlex from "../ui/TitleFlex"
import ListTags from "./ListTags"
import Tag from "./Tag"
import ChangeStatus from "./ChangeStatus"

// Utils
import convertDate from "../utils/convertDate"

// Styles
const Container = styled.div`
    width: 100%;
    padding: ${Variables.Margins.S};
    border: 1px solid ${Variables.ThemeColors.LighterGray};
    border-radius: ${Variables.Radii.M};
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.L};
`

const TitleContainer = styled.span`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.S};
`

const Title = styled(Font.H4)`
    a {
        color: ${Variables.ThemeColors.Link};
        text-decoration: none;
        transition: ${Variables.Transitions.Short};

        &:hover {
            color: ${Variables.ThemeColors.Primary70};
        }
    }
`

const Info = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.XXS};
`

const Item = styled.span`
    display: flex;
    align-items: center;

    & > span {
        margin-right: ${Variables.Margins.XXS};
    }
`

function Card(props) {
    const conditionDateTime = props.task.date || props.task.time
    return (
        <Container>
            <TitleFlex>
                <TitleContainer>
                    <Title>
                        <Link to={`/tasks/${props.task._id}`}>
                            {props.task.title}
                        </Link>
                    </Title>

                    {props.task.tags.length > 0 && (
                        <ListTags>
                            {props.task.tags.map((tag, i) => (
                                <Tag key={i}>
                                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                                </Tag>
                            ))}
                        </ListTags>
                    )}
                </TitleContainer>

                {conditionDateTime && (
                    <Info>
                        {props.task.date && (
                            <Item>
                                <Icon
                                    name="calendar"
                                    size={16}
                                    color={Variables.ThemeColors.Link}
                                />

                                {convertDate(props.task.date)}
                            </Item>
                        )}

                        {props.task.time && (
                            <Item>
                                <Icon
                                    name="clock"
                                    size={16}
                                    color={Variables.ThemeColors.Link}
                                />

                                {props.task.time}
                            </Item>
                        )}
                    </Info>
                )}
            </TitleFlex>

            {/* <SelectStatus task={props.task} /> */}
            <ChangeStatus task={props.task} index={props.index} />
        </Container>
    )
}

export default Card
