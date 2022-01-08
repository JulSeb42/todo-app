// Packages
import React from "react"

// Components
import Page from "../../components/layouts/Page"
import * as Font from "../../components/styles/Font"
import Button from "../../components/ui/Button"
import ChangeStatus from "../../components/tasks/ChangeStatus"
import TitleFlex from "../../components/ui/TitleFlex"
import ListTags from "../../components/tasks/ListTags"
import Tag from "../../components/tasks/Tag"

// Utils
import convertDate from "../../components/utils/convertDate"

function TaskDetail({ edited, setEdited, ...props }) {
    return (
        <Page title={props.task.title}>
            <TitleFlex>
                <Font.H1>{props.task.title}</Font.H1>

                <Button to={`/tasks/${props.task._id}/edit`} btnstyle="primary">
                    Edit
                </Button>
            </TitleFlex>

            <ChangeStatus
                task={props.task}
                edited={edited}
                setEdited={setEdited}
            />

            {props.task.tags.length > 0 && (
                <ListTags>
                    {props.task.tags.map((tag, i) => (
                        <Tag key={i}>
                            {tag.charAt(0).toUpperCase() + tag.slice(1)}
                        </Tag>
                    ))}
                </ListTags>
            )}

            {props.task.date && (
                <Font.Subtitle>
                    {convertDate(props.task.date)}
                    {props.task.time && ` at ${props.task.time}`}
                </Font.Subtitle>
            )}

            {props.task.description ? (
                <Font.P>{props.task.description}</Font.P>
            ) : (
                <Font.P>You didn't write a description.</Font.P>
            )}
        </Page>
    )
}

export default TaskDetail
