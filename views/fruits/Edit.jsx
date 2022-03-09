const React = require("react");
const DefaultLayout = require("../Default");



class Edit extends React.Component {
    render(){
        const {fruit} =this.props;
        return (
            <DefaultLayout>
                <form action={`/fruits/${fruit._id}?_method=PUT`} method="POST">
                    <fieldset>
                        <legend style={{fontSize :"3rem"}}>Edit</legend>
                        <label>
                           NAME : <input type="text" name="name"  value={`${fruit.name}`} placeholder="enter fruit name"/>
                        </label>
                        <label>
                           COLOR : <input  type="text" name="color" value={`${fruit.color}`}  placeholder="enter fruit color"/>
                        </label>
                        <label>
                        READY TO EAT: {fruit.readyToEat? <input type="checkbox" name="readyToEat" defaultChecked /> :
                         <input type="checkbox" name="readyToEat"/> }
                    </label>
                    
                    </fieldset>
                   
                    <input type="submit" value={`Edit ${fruit.name}`} />

                </form>

            </DefaultLayout>

        )
    }
}

module.exports=Edit;