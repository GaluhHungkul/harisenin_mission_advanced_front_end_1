import { useState } from "react"
import FloatingLabelInput from "../../tag/FloatingLabelInput"

const VoucherInput = () => {

    const [voucher, setVoucher] = useState<string>("")

  return (
    <div className="my-4 lg:my-2    ">
        <h1 className="text-lg text-white mb-4">Kode Voucher (Jika ada)</h1>
        <div className="flex gap-4 items-center">
            <FloatingLabelInput value={voucher} onChange={(e) => setVoucher(e.target.value)} type="text" id="voucher" label="Masukkan kode voucher"/>
            <button className="bg-[#3D4142] text-white px-4 py-3   rounded-full  font-semibold hover:brightness-90 active:brightness-75 cursor-pointer">Gunakan</button>z
        </div>
    </div>
  )
}

export default VoucherInput