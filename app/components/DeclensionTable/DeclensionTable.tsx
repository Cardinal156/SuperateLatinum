"use client";

import "./DeclensionTable.css";
import React from 'react';

type NounCase = "Nominative" | "Genitive" | "Dative" | "Accusative" | "Ablative";
interface DeclensionClicked {
    declension: keyof typeof nounDeclensions;
    isPlural: boolean;
    case: NounCase;
}

interface TableProps {
    enabledDeclensions: (keyof typeof nounDeclensions)[];
    onDeclensionPressed?: (data: DeclensionClicked) => void;
}

const nounCases: NounCase[] = [
    "Nominative", "Genitive", "Dative", "Accusative", "Ablative", // Singular
    "Nominative", "Genitive", "Dative", "Accusative", "Ablative", // Plural
];

const nounDeclensions = {
    secondMas: [
        "us",
        "i",
        "o",
        "um",
        "o",
        "i",
        "orum",
        "is",
        "os",
        "is"
    ],
    firstFem: [
        "a",
        "ae",
        "ae",
        "am",
        "ā",
        "ae",
        "arum",
        "is",
        "as",
        "is"
    ],
    secondNeut: [
        "um",
        "i",
        "o",
        "um",
        "o",
        "a",
        "orum",
        "is",
        "a",
        "is"
    ]
}

const DeclensionTable: React.FC<TableProps> = ({ enabledDeclensions, onDeclensionPressed = () => {} }) => {
    return (
        <div
            className={`grid p-4`}
            style={{
                gridTemplateColumns: `repeat(${enabledDeclensions.length}, 1fr)`,
                gridTemplateRows: `auto`, // 5 cases: Nominative, genititive, dative, accusative, and ablative
            }}
        >
            {enabledDeclensions.map((declension, declensionIndex) => (
                <div key={declensionIndex}>
                    {nounCases.map((nounCase, caseIndex) => {
                        return (
                            <div
                                className={`tile`}
                                onClick={() => onDeclensionPressed({ declension, isPlural: caseIndex > 4, case: nounCase })}
                                style={{
                                    // Esentially, it disables the border if the border of another div is touching it or
                                    // if it is an edge. There is probably a better way to do this but I'm new to this.
                                    borderRight: declensionIndex === enabledDeclensions.length - 1 ? 'none' : '',
                                    borderTop: caseIndex === 0 ? 'none' : '',
                                }}
                            >
                                <p>{nounDeclensions[declension][caseIndex]}</p>
                            </div>
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default DeclensionTable;
