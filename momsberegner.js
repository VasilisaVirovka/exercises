function beregnMedMoms(beloeb, moms = 25) {
    const beloebMedMoms = beloeb + (beloeb * moms / 100);
    console.log(beloebMedMoms);
}

beregnMedMoms(100);
