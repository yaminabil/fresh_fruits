const React = require ("react");
const DefaultLayout = require("../Default.jsx"); 



class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <form action="/fruits" method="POST">
                    <fieldset>
                        <legend style={{fontSize :"3rem"}}>Create a New Fruit</legend>
                        <label>
                           NAME : <input type="text" name="name"  placeholder="enter fruit name"/>
                        </label>
                        <label>
                           COLOR : <input  type="text" name="color" placeholder="enter fruit color"/>
                        </label>
                        <label>
                           Ready To Eat : <input type="checkbox" name="readyToEat" />
                        </label>
                    </fieldset>
                    <input type="submit" value="create New fruit" />

                </form>
                
            </DefaultLayout>
        )
    }
}



module.exports = New ;