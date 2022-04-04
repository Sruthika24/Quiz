

export default function QuizCard() {
    return (
        <div className='container'>
            <div className='col content'>
                <div className='row'>Data Structures Quiz</div>
                <div className='row'>1. The data structure required to check whether an expression contains a balanced parenthesis is?</div>
                <div className='row options'>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Stack
                        </button>
                    </div>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Tree
                        </button>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Hashmap
                        </button>
                    </div>
                    <div className='col'>
                        <button type="button" className='btn btn-warning' data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
                            Queue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}