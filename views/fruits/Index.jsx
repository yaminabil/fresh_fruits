const React = require('react');
const DefaultLayout = require("../Default.jsx");


class Index extends React.Component {
    render(){
        const { fruits } = this.props;
        return(
            <DefaultLayout>
                <a href="/fruits/new"><button>Create a New fruit</button></a>
                <div>
                    {
                        fruits.map((fruit) => (
                            <article>
                                <a href={`/fruits/${fruit._id}`}>
                                    <h2>
                                        {fruit.name} - {fruit.readyToEat ? 'Ripe' : 'Yuck this is nasty' }
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;