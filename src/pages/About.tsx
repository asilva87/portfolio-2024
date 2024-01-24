import './About.css'

export function About() {
    const rows = ['abcdéfghi'.split(''), 'jklmnopqr'.split(''), 'stuvwxyz.'.split('')]
    const myNameLetters = 'abdéilnrsv'.split('')

    function produceRow(row: string[]) {
        return row.map((letter: string) => <div className={myNameLetters.includes(letter) ? 'about__alphabet--special-letter' : 'about__alphabet__letter '}>{letter}</div>)
    }

    return (
        <div className="about__wrapper">
            <div className="about__alphabet">
                {rows.map((row: string[]) => (
                    <div className="row">
                        {produceRow(row)}
                    </div>
                ))}
            </div>

            <div className="about__description__wrapper">
                <div className="about__name">
                    <p>Andre Silva</p>
                </div>
                <div className="about__description">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam, <span style={{ fontSize: '1.2rem', color: 'red'}}>nemo quae magnam</span> pariatur accusamus sint, recusandae unde a voluptate, deleniti blanditiis ducimus repellat in reprehenderit delectus alias iusto deserunt doloribus.</p>
                </div>
            </div>

            {/* add / to go back home */}
        </div>
    )
}