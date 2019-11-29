import React from 'react';

class Home extends React.Component {

    render() {
        return (
<div class="container">
    <div class="jumbotron">
        <h1 class="display-4">NIAKARIE</h1>
        <p class="lead">DESCRIPTION première</p>
        <div class="border-bottom"></div>
        <div class="my-4">
            <p>Description Deuxième</p>
            <button class="btn btn-primary btn-lg">Nous découvrir</button>
        </div>
        <h4 class="text-center">Nos dernières productions:</h4><br/>
        <div class="row">
        <div class="card col-md-3">
                <div class="card-body">
                    <h5 class="card-title">Courir</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Sous-titre</h6>
                    <p class="card-text">Descriptif</p>
                    <button class="btn btn-link" onClick={this.props.vid1}>voir</button>
                </div>
            </div>
            <div class="card offset-md-1 col-md-3">
                <div class="card-body">
                    <h5 class="card-title">Go sport</h5>
                    <h6 class="card-subtitle mb-2 text-muted">Sous-titre</h6>
                    <p class="card-text">Descriptif</p>
                    <button class="btn btn-link" onClick={this.props.vid2}>voir</button>
                </div>
            </div>
        </div>
    </div>
</div>
        )
    }
}

export default Home;