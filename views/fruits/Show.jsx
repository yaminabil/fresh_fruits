const React = require("react");
const DefaultLayout = require("../Default.jsx");



class Show extends React.Component {
    render() {
        const {fruit} = this.props;
            return (
                <DefaultLayout>
                    <div>
                        <article>
                            <h2>
                                {fruit.name} - 
                                {fruit.readyToEat ? "is ready to eat":"is not yet ready to be consumed"}
                            </h2>
                            <h3>{fruit.color}</h3>
                            <a href={`/fruits/${fruit._id}/edit`}><button>Edit</button></a>
                            <form action={`/fruits/${fruit._id}?_method=DELETE`} method="POST">
                                <input type ="submit" value="Delete" />
                                </form>
                             <a href="/fruits/"><button>Back to main </button></a>
                        </article> 
                    </div>
                </DefaultLayout>

            )
    }
}

module.exports=Show;