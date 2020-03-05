export const inc = () => ({ type: 'INC' });

export const dec = () => ({ type: 'DEC' });

export const clr = () => ({ type: 'CLR' });

export const rnd = (payload) => ({ type: 'RND', payload });

export const clr_rnd = ( payload_clr ) => ({ type: 'CLR_RND', payload_clr });