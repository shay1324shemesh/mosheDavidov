import { saveAs } from 'file-saver';
import './cardCreator.css'
function downloadVcfFile() {
  // Define the vCard data
  const vCardData = `BEGIN:VCARD
VERSION:3.0
N:משה דוידוב;;;
FN:משה
TEL;TYPE=WORK,VOICE:(+972) 52-377-3413
EMAIL;TYPE=PREF,INTERNET:avraham1962@gmail.com
END:VCARD`;

  // Convert the vCard data to a Blob
  const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });

  // Use file-saver to save the Blob as a file
  saveAs(blob, 'Moshe-Davidov.vcf');
}

function VCardCreator() {
  return (
    <div className='vCardCreatorMain'>
      <h2 onClick={downloadVcfFile}>משה דוידוב</h2>
    </div>
  );
}

export default VCardCreator;
