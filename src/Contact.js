import React from 'react';

class Contact extends React.Component {
    render() {
        return (
            <div class="container">
                <div class="form-group col-md-4">
                    <div class="form-group">
                        <label for="exampleFormControlInput1" class="text-white">Nom:</label>
                        <input class="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput1" class="text-white">Prénom:</label>
                        <input class="form-control" id="exampleFormControlInput1"></input>
                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlInput2" class="text-white">Message:</label>
                        <textarea class="form-control" id="exampleFormControlInput2" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <button class="btn btn-primary">Envoyer</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact;