import {CheckList} from '../../components/CheckList/CheckList.js'

const TodoItems = [
    {
        id: 0,
        text:"good",
        value: "good"
    }, {
        id: 1,
        text:"bad",
        value: "bad"
    }, {
        id: 2,
        text:"not bad, because worse",
        value: "bad"
    }, {
        id: 3,
        text:"awesome",
        value: "good"
    }   
  ]

export const PageCheckList = () => {
    return (<>
        <CheckList title="Plan for today" tasks={[{id: 0, text:"Clap", value:"bad"}]}/> 
        <CheckList title="Plan for sunday" tasks={TodoItems}/>  
    </>)
}