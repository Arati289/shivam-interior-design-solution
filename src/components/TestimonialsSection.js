function TestimonialsSection() {

  const testimonials = [
    {
      name: "Rahul Patil",
      review: "Amazing work! My home looks beautiful and modern."
    },
    {
      name: "Sneha Desai",
      review: "Professional team and excellent interior designs."
    },
    {
      name: "Amit Kulkarni",
      review: "Delivered the project on time with great quality."
    }
  ];

  return (
    <div className="bg-light py-5">

      <div className="container">

        <h2 className="text-center mb-5">
          What Our Clients Say
        </h2>

        <div className="row">

          {testimonials.map((item, index) => (

            <div className="col-md-4" key={index}>

              <div className="card shadow p-3 mb-4">

                <h5>{item.name}</h5>

                <p>
                  "{item.review}"
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}

export default TestimonialsSection;