import React from 'react';
import jsPDF from 'jspdf';

const Invoice = () => {

  // Function to generate and download the PDF
  const downloadAsPDF = () => {
    const doc = new jsPDF();

    // Set up the invoice content
    doc.setFontSize(24);
    doc.text('Invoice', 20, 20,);
    // Add the rest of the invoice content using doc.text() or other methods

    // Set up the invoice content
    const companyName = ('HireTrace')
    doc.setFontSize(16);
    doc.setTextColor(85, 158, 223); // Light blue color
    doc.text(companyName, 20, 30,);

    // Add billing address
    const billingAddress = [
      'Bapter (Pvt) Ltd Hiretrace',
      'IP 112.134.73.137',
      'hiretrace.release.v2.0.0@gmail.com',
      '+1 (222) 222-2222',
      '32/A, Nittambuwa',
      'Sri Lanka.',
    ];
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(billingAddress.join('\n'), 20, 40);

    // Add billing address
        // Render contact details
        // const contactDetailsValue = (billingDetails && billingDetails.billing_contact_details) && billingDetails.billing_contact_details.is_billing_contact_details_set === false
        //     ? <span className={styles.notAvailableTag}>Not available</span>
        //     : (billingDetails && billingDetails.billing_contact_details) && billingDetails.billing_contact_details.street_address;

        // doc.setFontSize(12);
        // doc.setTextColor(0);
        // doc.text(contactDetailsValue, 20, 60);

    // Add today's date in the top right corner
    const today = new Date().toLocaleDateString('en-US');
    doc.setFontSize(12);
    const pageSize = doc.internal.pageSize;
    const pageWidth = pageSize.width;
    doc.text(today, pageWidth - 20, 20, { align: 'right' });

    // Generate the table
    const tableData = [
      ['Item', 'Quantity', 'Price', 'Total'],
      ['Product 1', '2', '$10', '$20'],
      ['Product 2', '3', '$15', '$45'],
    ];

    doc.autoTable({
      startY: 80,
      head: tableData.slice(0, 1),
      body: tableData.slice(1),
    });

    doc.text('For inquiries related to your order & delivery, you may contact:', 20, 125,);

    // Add billing address
    const companyAddress = [
      'Electrobeam (Private) Limited',
      'https://www.electrobeam.com',
      'No 37/6, Mangala Mawatha, Kalutara North.,',
      'Kalutara Reg No: PV 00218390',
      'achirashamal@electrobeam.com',
      '0342225683',
    ];
    doc.setFontSize(12);
    doc.setTextColor(0);
    doc.text(companyAddress.join('\n'), 20, 140);

    // Save and download the PDF
    doc.save('invoice.pdf');
  };

  return (

    <div>
      {/* Rest of the invoice content */}
      <div>
        <h1>Invoice</h1>
        <div>
          <div>
            <strong>Invoice Number:</strong> INV-12345
          </div>
          <div>
            <strong>Date:</strong> May 31, 2023
          </div>
          <div>
            <strong>Due Date:</strong> June 15, 2023
          </div>
          <div>
            <strong>Bill To:</strong> John Doe
          </div>
          <div>
            <strong>Address:</strong> 123 Main St, City, State, Zip
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Product 1</td>
              <td>2</td>
              <td>$10</td>
              <td>$20</td>
            </tr>
            <tr>
              <td>Product 2</td>
              <td>3</td>
              <td>$15</td>
              <td>$45</td>
            </tr>
          </tbody>
        </table>
        <div>
          <div>
            <strong>Subtotal:</strong> $65
          </div>
          <div>
            <strong>Tax:</strong> $5
          </div>
          <div>
            <strong>Total:</strong> $70
          </div>
        </div>
      </div>
      <button onClick={downloadAsPDF}>Download PDF</button>
    </div>
    // {
    //     title: 'Invoice', field: 'total_bill_amount', render: (rowData) =>
    //         <div className={styles.paymentStatusContainer}>
    //             <div className="ml-4">
    //                 <div>
    //                     <Button type="primaryAddBtn" onClick={() => downloadAsPDF(rowData._id)}>Download</Button>
    //                 </div>

    //             </div>
    //         </div>
    // },

    // <Col>
    //                     <CustomButton
    //                         buttonType="button"
    //                         label="Download"
    //                         type="primaryAddBtn"
    //                         frontIcon={
    //                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-download">
    //                                 <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4">
    //                                 </path>
    //                                 <polyline points="7 10 12 15 17 10"></polyline>
    //                                 <line x1="12" y1="15" x2="12" y2="3"></line>
    //                             </svg>

    //                         }
    //                         handleClick={() => downloadAsPDF()}

    //                     />
    //                 </Col><br />

  )
}

export default Invoice