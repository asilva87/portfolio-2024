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
        </div>
    )
}