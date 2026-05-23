import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
const generateBillPDF=async (cartItems,subTotal)=>{
        const doc=new jsPDF();
        doc.text("Invoice", 14, 15);
        autoTable(doc,{
        startY:25,
          head : [["Product","Quantity","Price","Total"]],
          body : cartItems.map((item)=>[
            item.name,
            item.quantity,
            item.price,
            item.quantity*item.price
          ])
        })
        doc.text("Subtotal",14,doc.lastAutoTable.finalY + 10)
        doc.text(`${subTotal}`,160,doc.lastAutoTable.finalY + 10)
        window.open(doc.output("bloburl"), "_blank");
        //doc.save("invoice.pdf");
        const res = await fetch("http://localhost:5000/api/cart", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          items: cartItems.map((item)=>({
            id:item._id,
            quantity:item.quantity
          }))
        })
      });
    }
export default generateBillPDF;