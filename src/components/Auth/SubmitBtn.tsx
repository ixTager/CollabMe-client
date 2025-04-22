import React from "react";

interface Props{
    click: () => void;
};

class SubmitBtn extends React.Component<Props> {
    render(): React.ReactNode {
        return <button onClick={this.props.click}>Submit</button>;
    }
}

export default SubmitBtn;
