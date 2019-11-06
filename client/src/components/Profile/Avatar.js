import React from 'react'
import Avatar from 'react-avatar-edit'

class AvatarIMG extends React.Component {

    constructor(props) {
        super(props)
        const src = 'http://placehold.it/1000'
        this.state = {
            preview: null,
            src
        }

    }

    onClose = () => {
        this.setState({ preview: null })
    }

    onBeforeFileLoad = elem => {
        if (elem.target.files[0].size > 71680) {
            alert("File is too big!");
            elem.target.value = "";
        } else {
            this.props.storeAvatarURL(elem.target.value)
        }
    }

    componentDidMount = () => {
        this.setState({
            src: this.props.url ? this.props.url : 'http://placehold.it/1000'
        })
    }

    render() {
        const url = this.props.url ? this.props.url : 'http://placehold.it/1000'
        //  console.log(this.state.src)
        return (
            <Avatar
                width={150}
                height={150}
                onClose={this.onClose}
                onBeforeFileLoad={this.onBeforeFileLoad}
                src={url}
            />
        )
    }
}


export default AvatarIMG;