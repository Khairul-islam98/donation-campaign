const getDonations = () => {
    const donation = localStorage.getItem('donation');
    if(donation){
       return JSON.parse(donation);
    }
    return [];
}

const saveDonations = (id) => {
    const donation = getDonations();
    const exists = donation.find(value => value === id)
    if(!exists){
        donation.push(id);
        localStorage.setItem('donation', JSON.stringify(donation))
    }
}

export {saveDonations, getDonations}