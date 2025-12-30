using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Eventz.Application.Common
{
    public class ApiResponse<T>
    {
        public string? Error { get; set; }
        public bool Errored { get; set; }
        public T? Payload { get; set; }

        public static ApiResponse<T> Success(T payload) => new ApiResponse<T>
        {
            Errored = false,
            Payload = payload
        };

        public static ApiResponse<T> Failure(string error) => new ApiResponse<T>
        {
            Errored = true,
            Error = error
        };
    }

}
