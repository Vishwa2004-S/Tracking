export interface InvoiceData {
  Invoice_no: string;
  Invoice_status: string;
  Invoice_date: string;
  Country: string;
  Destination: string | null;
  Total_Ctn: string;
  Total_Wgt: string;
  sender_name: string;
  sender_mobile: string;
  Delivery_State: string;
  Delivery_Area: string | null;
  receiver_name: string;
  recevier_no: string;
  receiver_address: string;
  "0.00": string;
  transit_type_name: string;
  invoice_remarks: string;
  hawb_id: string;
  order_no: string;
}

export interface CartonData {
  invoice_no: string;
  carton_no: string;
  Origin: string;
  Destination: string;
  Transit_Date: string;
  ScanTime: string;
  carton_weight: string;
  Scan_By: string;
  operation_name: string;
  tracking_status: string;
  packing_condition: string;
  created_time: string;
  ptp_mf_no: string;
  remarks: string | null;
  scheduling_status: string | null;
  exp_date: string;
}

export interface InvoiceResponse {
  status: string;
  code: string;
  data: InvoiceData[];
}

export interface CartonResponse {
  status: string;
  code: string;
  data: CartonData[];
}