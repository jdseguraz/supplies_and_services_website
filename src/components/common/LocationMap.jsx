const LocationMap = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Nuestra Ubicación</h2>
        <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7932.586276488915!2d-75.60839682432089!3d6.225026326558444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429ec49ede769%3A0xd85457779cb92819!2zQ3JhIDgzICMgMTktMTA0LCBNZWRlbGzDrW4sIEJlbMOpbiwgTWVkZWxsw61uLCBBbnRpb3F1aWE!5e0!3m2!1sen!2sco!4v1751596622247!5m2!1sen!2sco"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Ubicación del local"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="mt-6 text-center">
          <p className="text-lg">Dirección: Cra 83 #19 - 104, Belen altavista parte baja</p>
          <p className="text-gray-600">Horario: Lunes a Viernes 7:00 - 18:00</p>
        </div>
      </div>
    </div>
  )
}

export default LocationMap