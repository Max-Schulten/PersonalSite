function Canvas(props) {
    return (
        <div class="offcanvas offcanvas-start" id={props.id}>
            <div class="offcanvas-header">
                <h1 class="offcanvas-title">{props.title}</h1>
            </div>
            <div class="offcanvas-body">
                {props.wip === "true" &&
                    <span class="badge bg-warning mb-2"><span class="fa fa-person-digging"></span>Work in Progress</span>
                }
                <p class="mb-3">{props.body}</p>
                <button class="w-100"><a href={props.link} target="_blank"><i class="button_top fa-solid fa-laptop-code"></i></a></button>
                {props.deployed == "true" && 
            <button class="w-100"><a href={props.app}><i class="button_top fa-solid fa-cube"></i></a></button>
            }
            </div>
            
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('target1')).render(<Canvas id="bootstrapform" title="Bootstrap Based Booking Form" body="Front-end only form made using Bootstrap 3.0. Completed during CSDS 221 (Intro to Full-Stack Web Development)" link="https://codepen.io/Max-Schulten/pen/MWRYELM" />)
ReactDOM.createRoot(document.getElementById('target2')).render(<Canvas id="thiswebsite" title="This Website" body="This website is built using a combination of JQuery, Bootstrap, and React." link="https://github.com/Max-Schulten/PersonalSite" />)
ReactDOM.createRoot(document.getElementById('target3')).render(<Canvas wip="true" id="calculus" title="Tools For Multivariable Calculus" body="Built with NumPy, these scripts can solve problems from the more computational side of multivariable calculus. The UI, built using tkinter, is not complete." link="https://github.com/Max-Schulten/Calculus" />)
ReactDOM.createRoot(document.getElementById('target4')).render(<Canvas id="guillotine" title="Guillotine in Java" body="The final coding project in CSDS 132: Intro to Programming in Java for the Fall of '22 semester, we were asked to build a working version of the card game Guillotine. Fully functional, this version is playable by 2 people at a time." link="https://github.com/Max-Schulten/CSDS-132-Guillotine" />)
ReactDOM.createRoot(document.getElementById('target5')).render(<Canvas id="fifa" title="EA FC 24 Higher/Lower" body="Using pandas and complete CSV of all players in the EA FC 24 database found on Gigasheet created a very basic text-based game played in the console. Trivial, but used to teach a friends about reading csv data in python." link="https://github.com/Max-Schulten/Python/tree/main/FifaPlayerProject" />)
