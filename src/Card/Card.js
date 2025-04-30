import Scania from '../scaniaa.jpg'
import Poprace from '../poprace.jpg'
import rlc from '../rlc.jpg'


export function Card() {
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card">
                    <img src={Scania} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">P R E V E N T A</h5>
                        <p className="card-text">

                            Hot Wheels Elite 64: Scania 770 S🔥
                            Precio: $90 cd/u
                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={Poprace} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">P R E V E N T A</h5>
                        <p className="card-text">
                            PopRace Enigma: Porshe 997 RWB
                            Precio: $90 cd/u

                        </p>
                    </div>
                </div>
            </div>
            <div className="col">
                <div className="card">
                    <img src={rlc} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">P R E V E N T A</h5>
                        <p className="card-text">
                        HotWheels RLC: 1969 Dodge Charger R/T
                        Precio: $90 cd/u
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}
