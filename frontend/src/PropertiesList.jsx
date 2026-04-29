import {
  useEffect,
  useState,
} from "react";
import api from "./api/api";

function PropertiesList() {
  const [properties, setProperties] =
    useState([]);
  const [loading, setLoading] =
    useState(true);

  // States للفورم الجديدة
  const [title, setTitle] =
    useState("");
  const [price, setPrice] =
    useState("");
  const [description, setDescription] =
    useState("");

  // دالة جلب العقارات
  const fetchProperties = () => {
    api
      .get("properties/")
      .then((response) => {
        setProperties(response.data);
        setLoading(false);
      })
      .catch((err) =>
        console.error(err)
      );
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  // دالة إرسال العقار الجديد للباك إند
  const handleSubmit = (e) => {
    e.preventDefault(); // منع الصفحة من التحديث

    const newProperty = {
      title: title,
      description: description,
      price: parseFloat(price), // تحويل السعر لرقم
      city: "Cairo", // حقل إجباري في الموديل
      bedrooms: 2, // حقل إجباري في الموديل
      bathrooms: 1, // حقل إجباري في الموديل
      area: 100, // حقل إجباري في الموديل
      created_by: 1, // رقم الـ ID بتاعك كـ Admin (مؤقتاً)
    };

    api
      .post("properties/", newProperty)
      .then(() => {
        alert("تم إضافة العقار بنجاح!");
        // تصغير الفورم وتحديث القائمة
        setTitle("");
        setPrice("");
        setDescription("");
        fetchProperties();
      })
      .catch((err) =>
        console.error(
          "فشل في الإضافة:",
          err
        )
      );
  };

  if (loading)
    return <h2>جاري التحميل...</h2>;

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>
        EstateHub - إدارة العقارات
      </h1>

      {/* فورم الإضافة */}
      <form
        onSubmit={handleSubmit}
        style={{
          marginBottom: "40px",
          padding: "20px",
          border: "2px solid #007bff",
          borderRadius: "10px",
        }}
      >
        <h3>أضف عقاراً جديداً</h3>
        <input
          type="text"
          placeholder="عنوان العقار"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <input
          type="number"
          placeholder="السعر"
          value={price}
          onChange={(e) =>
            setPrice(e.target.value)
          }
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
          }}
        />
        <textarea
          placeholder="وصف العقار"
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          required
          style={{
            display: "block",
            width: "100%",
            marginBottom: "10px",
          }}
        ></textarea>
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
          }}
        >
          حفظ العقار
        </button>
      </form>

      {/* عرض القائمة */}
      <h2>قائمة العقارات الحالية</h2>
      {properties.map((p) => (
        <div
          key={p.id}
          style={{
            borderBottom:
              "1px solid #eee",
            marginBottom: "10px",
          }}
        >
          <h4>
            {p.title} - {p.price} ج.م
          </h4>
          <p>{p.description}</p>
        </div>
      ))}
    </div>
  );
}

export default PropertiesList;
