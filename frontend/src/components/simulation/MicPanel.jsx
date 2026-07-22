import MicIcon from "../../assets/images/icon_mic.png";

export default function MicPanel() {

    return (

        <div className="mic-panel">

            <div className="mic-circle">

                <img
                    src={MicIcon}
                    alt=""
                />

            </div>

            <button className="finish-session-btn" >

                Akhiri Sesi
                <br/>
                & Evaluasi

            </button>

        </div>

    );

}