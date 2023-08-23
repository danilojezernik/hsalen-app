export interface Blog {

  _id: { $oid: string },
  tag?: string,
  naslov: string,
  podnaslov: string,
  vsebina: string

}
