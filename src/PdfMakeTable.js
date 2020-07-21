import pdfMake from "pdfmake/build/pdfmake";
import vfsFonts from "pdfmake/build/vfs_fonts";
import fakeData from "./FakeData";

const _format = (data) => {
  return data.map((item) => {
    return [
      { text: item.name },
      { text: item.username },
      { text: item.email },
      { text: item.phone },
      { text: item.website },
    ];
  });
};

export default (rows) => {
  const { vfs } = vfsFonts.pdfMake;
  pdfMake.vfs = vfs;

  const data = fakeData(rows);
  const formattedData = _format(data);

  const documentDefinition = {
    pageSize: "A4",
    pageOrientation: "landscape",
    content: [
      { text: "React + pdfmake example" },
      "\n",
      {
        table: {
          headerRows: 1,
          dontBreakRows: true,
          body: [
            [
              { text: "Nome", style: "tableHeader" },
              { text: "Usuário", style: "tableHeader" },
              { text: "E-mail", style: "tableHeader" },
              { text: "Telefone", style: "tableHeader" },
              { text: "Site", style: "tableHeader" },
            ],
            ...formattedData,
          ],
        },
      },
    ],
  };

  pdfMake.createPdf(documentDefinition).open();
};
